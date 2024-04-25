export default function Title({
  title,
  desc,
  isCommentTitle,
}: {
  title: string;
  desc: string;
  isCommentTitle: boolean;
}) {
  return (
    <div className={` flex flex-col ${!isCommentTitle && `items-center`}`}>
      <span
        className={`px-6 ${!isCommentTitle && `mx-auto inline-block `} ${
          isCommentTitle && ` w-48`
        } text-center bg-[#7167FF] font-interSemiBold text-white rounded-full text-lg`}
      >
        {title}
      </span>
      <p
        className={` ${
          !isCommentTitle && `text-center`
        } text-[#4f4b8b] font-interBold text-4xl mt-4`}
      >
        {desc}
      </p>
    </div>
  );
}
