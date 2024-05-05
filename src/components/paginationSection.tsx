import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export const PaginationSection = ({
  totalItem,
  ItemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItem: any;
  ItemsPerPage: any;
  currentPage: any;
  setCurrentPage: any;
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItem / ItemsPerPage); i++) {
    pages.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleNextPage2 = () => {
    if (currentPage + 1 < pages.length) {
      setCurrentPage(currentPage + 2);
    }
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => {
              handlePrevPage();
            }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink className="bg-black/15 cursor-pointer">
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {currentPage < pages.length && (
          <PaginationItem>
            <PaginationLink onClick={handleNextPage} className="cursor-pointer">
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage + 2 <= pages.length && (
          <PaginationItem>
            <PaginationLink
              onClick={handleNextPage2}
              className="cursor-pointer"
            >
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() => {
              handleNextPage();
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
