export default function Tags({tags}) {
  return (
    <div className="-mr-1.5">
      {tags?.map((tag, i) => {
        if (i < 3) {
          return (
            <div
              key={tag}
              className="text-sm font-light mb-2 mr-1 ml-0 mt-0 rounded-3xl bg-bgSec text-tert py-1.5 px-4 inline-block"
            >
              {tag}
            </div>
          );
        }
      })}
    </div>
  );
}
