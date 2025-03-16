'use client'


import { Header} from "./components/header/page";
import { Footer } from "./components/footer/page";
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <Header />
       <p>Hello World</p>
       <button onClick={() => router.push('/login/student')}>Click me</button>
       <Footer />
    </div>
  );
}
