import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-0">
      <div className="flex-center wrapper bg-primary-50 flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={120}
            height={120}
          />
        </Link>

        <p className="text-white">2024 Eventia. All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
