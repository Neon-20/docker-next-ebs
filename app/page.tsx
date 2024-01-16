
import { LoginButton } from "@/components/login-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <div className='h-screen'>
        <UserButton afterSignOutUrl="/"/>
        </div> */}      
    <h1 className='text-3xl items-center flex flex-col justify-center
    w-full font-semibold gap-y-10'>
        Docker + Next + EBS
        <LoginButton asChild>
        <Button>Enter the Hole 🕳️</Button>
        </LoginButton>
    </h1>
    </main>
    );
}

export default Home;