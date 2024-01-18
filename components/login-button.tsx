"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


interface LoginButtonProps{
    children:React.ReactNode,
    asChild?:boolean;
}
export const LoginButton = ({
    children,
    asChild
}:LoginButtonProps ) => {   
    const router = useRouter();
    const {isSignedIn,isLoaded} = useAuth();

    const onClick = () =>{
    if(!isSignedIn){
    router.push("/sign-in")
    }
    else{
        router.push("/dashboard")
    }
    }

    return ( 
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
}


// //Only for checking whether the current user is logged in or not


//auth wale button ko wrap krne k liye
