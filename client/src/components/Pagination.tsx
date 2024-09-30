import { Button } from "@radix-ui/themes";

export type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, pages, onPageChange }: Props) => {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center">
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li className={`p-2 ${page === number ? "bg-gray-200" : ""} rounded`}>
           <Button onClick={() => onPageChange(number)}> {number}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
