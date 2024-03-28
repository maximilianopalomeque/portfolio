export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center xl:items-start">
      <div className="text-2xl">{icon}</div>

      <div className="mt-2 xl:mt-5 text-center xl:text-start">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm md:px-10 xl:ps-0 xl:pe-14">{description}</p>
      </div>
    </div>
  );
}
