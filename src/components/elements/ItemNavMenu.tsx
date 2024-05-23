type Props = { 
  name: string;
};

export function ItemNavMenu({ name }: Props) {
  return (
    <li>
      <button className="flex items-center gap-[18px]">
        <span className="text-jogga-white font-regular">{name}</span>
      </button>
    </li>
  );
}