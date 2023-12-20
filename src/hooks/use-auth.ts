import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useAuth = () => {
  const router = useRouter();
  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            
             "Content-type": "application/json" },
        }
      );
      if (!res.ok) {
        toast.error("h");
        
        throw new Error();
      }
      toast.success("Signed out successfull");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error("Couldn't Signout");
    }
  };
  return { signOut };
};

export default useAuth;
