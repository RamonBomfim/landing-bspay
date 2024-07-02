export function NavLink({ id, label }: { id: string; label: string }) {
  return (
    <a
      href={`#${id}`}
      className="text-gray-600 font-jakarta font-semibold size-[1.125rem] uppercase w-auto whitespace-nowrap hover:text-gray-800"
    >
      {label}
    </a>
  );
}
