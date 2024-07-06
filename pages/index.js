import Link from "next/link";
import Common from "./common/common"

export default function Home() {
  return (
    <Common>
      <h1>Welcome!</h1>
      <h2>Member</h2>
      <div>
        <ur>
          <li>
            <Link href="/member/iida-profile">
              Koki Iida
            </Link>
          </li>
          <li>Masaki Iwata</li>
          <li>Asahi Oida</li>
          <li>Takuma Ujita</li>
          <li>Takami Saito</li>
        </ur>
      </div>
    </Common>
  );
}
