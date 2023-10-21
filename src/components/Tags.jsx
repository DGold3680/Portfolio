export default function Tags({tags,no=3}) {
  return (
    <>
      {tags?.map((tag, i) => {
        if (i < no) {
          return (
            <div
              key={tag}
              className="text-xs font-light mb-2 mr-1 ml-0 mt-0 rounded-3xl bg-bgSec text-tert/75 py-1.5 px-4 inline-block"
            >
              {tag}
            </div>
          );
        }
      })}
    </>
  );
}
