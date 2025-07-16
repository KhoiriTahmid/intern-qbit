function About() {
  return (
    <div className="px-20 my-10 flex flex-col gap-5">
      <p className="text-[#376240] font-semibold text-xl">ABOUT</p>
      <div className="bawah flex justify-center gap-30 items-center">
        <div className="kiri flex flex-col gap-10">
          <img src="logo.webp" alt="logo" className="w-35" />
          <p className=" text-[#376240] w-50 text-wrap">
            Kunanta adalah UMKM lokal yang menghadirkan produk perawatan pribadi
            berbasis sunnah seperti sabun zaitun, minyak habbatussauda, dan balm
            herbal.
          </p>
        </div>
        <div className="kanan  flex  border-2 border-[#376240]">
          <div className="dalam-kiri p-8 pb-0 flex flex-col gap-5 border-2 border-[#376240]">
            <p className="text-[#376240] w-40 text-2xl font-medium text-wrap">
              Bahan <span className="font-serif italic">Alami</span> dan{" "}
              <span className="font-serif italic">Halal</span>
            </p>
            <p className="text-[#376240] w-50 text-wrap">
              Kami hanya menggunakan bahan dari alam yang telah tersertifikasi
              halal dan aman digunakan
            </p>
            <img src="slogan1.webp" alt="slogan1" className="w-70" />
          </div>
          <div className="kanan flex flex-col">
            <div className="dalam-kiri p-8 pb-0 border-2 border-[#376240] flex flex-col ">
              <div className="gap-5 flex flex-col">
                <p className="text-[#376240] w-70 text-2xl font-medium text-wrap">
                  Terinspirasi{" "}
                  <span className="font-serif italic">Sunnah Nabi</span>
                </p>
                <p className="text-[#376240] w-60 text-wrap">
                  Diperkaya dengan bahan-bahan yang disebut dalam hadits.
                </p>
              </div>
              <img src="slogan2.webp" alt="slogan2" className="w-30 self-end" />
            </div>

            <div className="dalam-kiri  pl-0 border-2 border-[#376240] h-full flex">
              <img src="slogan3.webp" alt="slogan3" className="w-20" />
              <div className="h-full p-8 flex flex-col gap-5 pl-8">
                <p className="text-[#376240] w-70 text-2xl font-medium text-wrap">
                  <span className="font-serif italic">Aman</span> Untuk Semua
                </p>
                <p className="text-[#376240] w-70 text-wrap">
                  Produk kami diformulasikan lembut untuk bayi hingga dewasa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
