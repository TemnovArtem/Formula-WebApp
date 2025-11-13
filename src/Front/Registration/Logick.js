export async function saveUserData(user) {
  console.log("Отримані дані з форми:", user);

  const hashed = await Hash(user.password);
  const success = AlluserPermission(hashed);

  return success;
}

async function Hash(password) {
  const textAsBuffer = new TextEncoder().encode(password);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  return hashArray.map((item) => item.toString(16).padStart(2, "0")).join("");
}

function AlluserPermission(hash) {
  const permissionUser = [
    "594e519ae499312b29433b7dd8a97ff068defcba9755b6d5d00e84c524d67b06",
  ];

  if (permissionUser.includes(hash)) {
    return true;
  } else {
    alert(" Неправильний користувач або пароль");
    return false;
  }
}
