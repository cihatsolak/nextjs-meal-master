import Image from "next/image";

export default function MenuItem() {
  return (
    <>
      <div className="relative w-40 h-40 z-50">
        <Image src="/images/hamburger.jpg" alt="" fill />
      </div>
      <div></div>
    </>
  );
}
