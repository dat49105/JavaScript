
      window.onload = () => {
        let button = document.querySelector("#btn");

        // Function for calculating BMI
        button.addEventListener("click", tinh);
      };
      function tinh() {
        let vay = parseInt(document.querySelector("#vay").value);
        let time = parseInt(document.querySelector("#time").value);
        let lai = parseInt(document.querySelector("#lai").value);
        let resut = document.querySelector("#resut");
        let laiSuat = lai / 100 / time;
        let gocConlai = vay;
        let gocHangThang = Math.floor(vay / time);
        for (let i = 0; i < time; i++) {
          let laiPhaiTra = Math.floor(gocConlai * laiSuat);
          let tienTraHangThang = laiPhaiTra + gocHangThang;
          gocConlai = gocConlai - gocHangThang;
          resut.innerHTML =
            resut.innerHTML +
            `<br> Tien goc : <span>${gocConlai}</span> : goc: ${gocHangThang} : lai: ${laiPhaiTra} tong goc lai : ${
              gocHangThang + laiPhaiTra
            }`;
        }
      }