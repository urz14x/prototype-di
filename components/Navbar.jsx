import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-50 fixed backdrop-blur-md container flex items-center justify-center">
      <div className="flex items-center gap-2 w-1/3">
        <Image src="/1.png" width={120} height={100} alt="Logo 1" />
        <Image src="/2.png" width={120} height={100} alt="Logo 2" />
        <Image src="/3.png" width={120} height={100} alt="Logo 3" />
      </div>
      <ul className="flex items-center justify-between w-1/2">
        <li>
          <Link
            href="/"
            className="hover:bg-clr-100 px-3 py-2 rounded-full transition-all"
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link href="/">Pelayanan</Link>
        </li>
        <li>
          <Link href="/">Diklit</Link>
        </li>
        <li>
          <Link href="/">Informasi</Link>
        </li>
        <li>
          <Link href="/">Laporan</Link>
        </li>
        <li>
          <Link href="/">PPID</Link>
        </li>
        <li>
          <Link href="/">Tentang</Link>
        </li>
      </ul>
    </nav>
  );
}
