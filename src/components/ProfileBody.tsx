import React from "react";
import BodyProps from "../types/Types";

const ProfileBody = ({
  department,
  hard_skill,
  last_update,
  name,
  resume,
}: BodyProps) => {
  return (
    <section className="py-[25px] px-[20px]">
      <aside className=" box-content py-[10px]">
        <article className="rounded-[10px] bg-[#fe9a0a] box-content px-[10px] text-white uppercase">
          {department}
        </article>
      </aside>
      <aside className="py-[5px]">
        <p className="font-bold text-[1.5rem]">{hard_skill}</p>
      </aside>
      <aside className="py-[5px]">
        <p className="italic">{resume}</p>
      </aside>
      <aside className="flex items-center gap-4 rounded-lg py-[5px]">
        <article>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
        </article>
        <article className="flex flex-col">
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{last_update}</p>
        </article>
      </aside>
    </section>
  );
};

export default ProfileBody;
