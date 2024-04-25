import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 flex items-center justify-between px-12 py-3 bg-orange-200 shadow-sm dark:bg-gray-900">
      <div> </div>
      <div className="flex space-x-2 items-center">
        <Image src="/food/tako.png" alt="食べ物" width={60} height={60} />
        <Link href="/" className="text-2xl font-medium text-orange-900 dark:text-gray-100">
          大阪おすすめグルメ
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {" "}
        {/* グルメ、ログイン、登録のリンクを右端に配置 */}
        <Link
          href="/grume"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-6 duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 "
          )}
        >
          グルメ
        </Link>
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-4 duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 "
          )}
        >
          ログイン
        </Link>
        <Link
          href="/register"
          className={cn(
            buttonVariants({ variant: "secondary", size: "sm" }),
            "px-6 duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 "
          )}
        >
          Register
        </Link>
        <Settings />
      </div>
    </header>
  );
};

export default Header;
