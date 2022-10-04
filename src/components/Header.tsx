import { UserCircle } from "phosphor-react";

export function Header() {
  return (
    <div className="flex justify-end  px-4 py-2 bg-slate-100 border-b border-slate-200">
      <div className="flex justify-between">
        <p>Usuário: Francisco</p>
        {/* <UserCircle
          size={25}
          className="ml-3 hover:text-purple-800 hover:cursor-pointer"
        /> */}
      </div>
    </div>
  );
}
