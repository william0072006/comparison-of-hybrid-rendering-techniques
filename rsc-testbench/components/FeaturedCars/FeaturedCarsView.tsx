import { Car } from "./components";
import { getFeaturedCars } from "@/api/getFeaturedCars";

import { format, formatDistanceStrict, differenceInDays } from "date-fns";
import { v4, v1 } from "uuid";
import qs from "qs";
import validator from "validator";
import _ from "lodash";
import { pl, enUS } from "date-fns/locale";
import moment from "moment";
import "moment/locale/pl";
import * as d3 from "d3";
import * as XLSX from "xlsx";

// This is a bloated result object to stress the bundle size.
const bloatedResult = {
  id: [v4(), v1()],
  date: [
    format(new Date(), "yyyy-MM-dd"),
    format(new Date(), "PPPP", { locale: pl }),
    formatDistanceStrict(new Date(), new Date(), { locale: enUS }),
    differenceInDays(new Date(), new Date("2020-01-01")),
    moment().locale("pl").format("LLLL"),
  ],
  query: qs.parse(
    qs.stringify({ a: [1, 2, 3], b: { c: { d: "e" } } }, { encode: false }),
  ),
  isValid: [
    validator.isEmail("x@x.com"),
    validator.isURL("https://x.com"),
    validator.isCreditCard("4111111111111111"),
    validator.isISBN("9783161484100"),
    validator.isMobilePhone("1234567890", "any"),
    validator.isUUID("123e4567-e89b-12d3-a456-426614174000"),
    validator.isAlpha("abcDEF"),
    validator.isPostalCode("90210", "US"),
  ].every(Boolean),
  graph: d3.range(1000).map((i) => ({ x: i, y: Math.sin(i) })),
  excel: (() => {
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      wb,
      XLSX.utils.aoa_to_sheet([["a", "b"]]),
      "Sheet1",
    );
    return wb;
  })(),
};

export const FeaturedCarsView = async () => {
  const featuredCars = await getFeaturedCars();

  const renderTitle = () => (
    <div className="flex flex-col w-full pt-14 pl-20">
      <h2 className="text-7xl font-bold text-[#80978F]">Featured Cars</h2>
      <h3 className="text-2xl font-medium text-[#91BFA3] pl-0.5 mt-[-0.5rem]">
        By user searches
      </h3>
    </div>
  );

  const renderCars = () => (
    <div className="flex w-full justify-around px-20 mt-12 mb-20">
      {featuredCars.map((car) => (
        <Car
          key={car.id}
          imageUrl={car.imageUrl}
          shadowColor={car.shadowColor}
          name={car.name}
          team={car.team}
          engine={car.engine}
        />
      ))}
    </div>
  );

  return (
    <div
      className="flex flex-col items-center w-full bg-[#1D0609] mt-38"
      id="featured-cars"
    >
      <div className="hidden">{_.toString(bloatedResult)}</div>
      {renderTitle()}
      {renderCars()}
    </div>
  );
};
