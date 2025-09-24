import users from "./data.js";

export const index = () => {
  const output = document.getElementById("output");
  output.innerHTML = users
    .map((item, i) => `
      <tr>
        <td>${i + 1}</td>
        <td>${item.nama}</td>
        <td>${item.umur}</td>
        <td>${item.alamat}</td>
        <td>${item.email}</td>
      </tr>
    `)
    .join("");
};

export const store = (userList) => {
  userList.forEach(user => users.push(user));
  index();
}

export const destroy = (nama) => {
  const indexData = users.findIndex(item => item.nama === nama);
  if (indexData !== -1) {
    users.splice(indexData, 1);
    index();
  } else {
    alert(`Data dengan nama "${nama}" tidak ditemukan`)
  }
};
