import users from "./data.js";

export const index = () => {
  const output = document.getElementById("output");
  if (users.length === 0) {
    output.innerHTML = `<tr><td colspan="5" class="text-center">Tidak ada data</td></tr>`;
    return;
  }
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
  userList.forEach(user => {
    if (user.nama && user.umur && user.alamat && user.email) {
      users.push(user);
    } else {
      alert("Semua kolom harus diisi!");
    }
  });
  index();
};

export const destroy = (nama) => {
  const indexData = users.findIndex(item => item.nama.toLowerCase().startsWith (nama.toLowerCase())
  );
  if (indexData !== -1) {
    users.splice(indexData, 1);
    index();
    alert(`Data "${nama}" berhasil dihapus`);
  } else {
    alert(`Data dengan nama "${nama}" tidak ditemukan`);
  }
};
