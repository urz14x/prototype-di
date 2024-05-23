import Image from "next/image";
import { Spirax } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
const spirax = Spirax({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <main>
      <section className="container flex flex-row min-h-screen items-center justify-between relative">
        <Image
          src="/Beam.svg"
          className="absolute top-0 left-0 -z-20"
          width={1068}
          height={1068}
          alt=""
        />
        <article className="w-1/3 flex flex-col py-28">
          <h3 className={`${spirax.className} text-2xl`}>Selamat datang</h3>
          <h1 className="text-3xl text-clr-800 font-bold">
            RUMAH SAKIT UMUM DAERAH
          </h1>
          <h1 className="text-4xl text-clr-800 font-bold">
            Dr. Soetomo Surabaya
          </h1>
          <p className="text-sm font-normal text-slate-500 mt-2">
            Selamat datang di website resmi. kami siap memberikan <br />{" "}
            perawatan terbaik dan hangat untuk Anda.
          </p>
          <Button className="bg-clr-700 w-32 mt-5 rounded-full">
            Layanan Kami
          </Button>
        </article>
        <section className="w-1/2">
          <Image
            src="/main-hero.png"
            width={600}
            height={600}
            alt="Main-hero"
          />
        </section>
      </section>
      <section className="container flex flex-col py-5 items-center w-full justify-center relative">
        <h3 className={`${spirax.className} text-3xl`}>Tentang Kami</h3>
        <p className="text-center max-w-3xl mt-5 mb-5">
          RSUD Dr. Soetomo mempunyai tugas elaksanakan upaya kesehatan secara
          berdaya guna dan berhasil guna dengan mengutamakan upaya penyembuhan
          (kuratif) dan pemulihan (rehabilitatif)yang dilaksanakan secara serasi
          dan terpadu dengan upaya rujukan serta penyelenggaraan pendidikan,
          pelatihan tenaga kesehatan, penelitian dan pengembangan dibidang
          kesehatan
        </p>
        <Button className="rounded-full bg-[#FFC20E] hover:text-white text-clr-950 flex items-center gap-3 mt-3 shadow-md">
          <span>Lihat Detail</span>
          <span>
            <ArrowRightCircle />
          </span>
        </Button>
      </section>

      <section className="container flex flex-col min-h-screen items-center w-full justify-center relative">
        <div className="mb-10">
          <h3 className={`${spirax.className} text-3xl`}>
            Beberapa pelanan kami
          </h3>
          <div className="w-32 h-px bg-clr-800 mt-3"></div>
        </div>

        <div className="container grid grid-cols-2 mb-10 max-w-5xl place-items-center md:grid-cols-5 gap-10">
          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src="/services_1.png" width={120} height={120} alt="" />
            <p className="text-sm text-center text-clr-950">
              Pendataan Online Graha Amerta
            </p>
          </Link>
          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src="/services_2.png" width={120} height={120} alt="" />
            <p className="text-sm text-center text-clr-950">
              Pendataan Online Graha Amerta
            </p>
          </Link>
          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src="/services_3.png" width={120} height={120} alt="" />
            <p className="text-sm text-center text-clr-950">
              Pendataan Online Graha Amerta
            </p>
          </Link>

          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src="/services_4.png" width={120} height={120} alt="" />
            <p className="text-sm text-center text-clr-950">
              Pendataan Online Graha Amerta
            </p>
          </Link>
          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src="/services_5.png" width={120} height={120} alt="" />
            <p className="text-sm text-center text-clr-950">
              Pendataan Online Graha Amerta
            </p>
          </Link>
          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src="/services_6.png" width={120} height={120} alt="" />
            <p className="text-sm text-center text-clr-950">
              Pendataan Online Graha Amerta
            </p>
          </Link>
          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src="/services_7.png" width={120} height={120} alt="" />
            <p className="text-sm text-center text-clr-950">
              Pendataan Online Graha Amerta
            </p>
          </Link>
          <Link href="/" className="flex flex-col items-center justify-center">
            <Image src="/services_8.png" width={120} height={120} alt="" />
            <p className="text-sm text-center text-clr-950">
              Pendataan Online Graha Amerta
            </p>
          </Link>
        </div>
        <Button className="rounded-full bg-[#FFC20E] hover:text-white text-clr-950 flex items-center gap-3 mt-3 shadow-md">
          <span>Lihat Detail</span>
          <span>
            <ArrowRightCircle />
          </span>
        </Button>
      </section>
    </main>
  );
}
