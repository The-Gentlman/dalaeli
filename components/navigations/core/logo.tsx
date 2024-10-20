import Link from "next/link";
import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <Link href="/" className="group mr-4 flex items-center">
        <Image
        src="/images/authors/logo.png"
        alt="Header"
        width={120}
        height={20}
      />
      </Link>
    </>
  );
};
export default Logo;
