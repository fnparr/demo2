// app/page.tsx
import LogButton from "@/component/LogButton";
import CountButton from "@/component/CountButton";

export default function Home() {
  return( 
    <> 
    <h1 className='text-2xl font-bold'> ACTUS demo2 app home page!</h1>
    <h2 className='test-2l font-bold'> Example buttons with actions (testing)</h2>
    <p>Log Button rendered using Tailwind CSS</p>
    <p>Writes Hi! to the console.log</p>
    <LogButton/>
    <p>
      Increment clickcount
    </p>
    <CountButton />
    </>
  );
}
