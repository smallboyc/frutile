import { useMemo, useState } from "react";
import { Fruit } from "../types/Fruit";
import { useFetchData } from "../hooks/useFetchData";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Card from "../components/Card/Card";
import ThemedText from "../components/ThemedText/ThemedText";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";
import Dropdown from "../components/Dropdown/Dropdown";

const Yard = () => {
  const { data, loading } = useFetchData("api/fruit/all");
  const [fruitDisplayCount, setFruitDisplayCount] = useState(data?.length);
  const [search, setSearch] = useState("");
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);

  const [familyFilters, setFamilyFilters] = useState<string[]>([]);
  const [orderFilters, setOrderFilters] = useState<string[]>([]);
  const [genusFilters, setGenusFilters] = useState<string[]>([]);

  const [selectedFilterDropdown, setSelectedFilterDropdown] = useState<
    string[] | null
  >(null);

  const familyFruits = useMemo(() => {
    const uniqueFamilies: string[] = [];
    data?.forEach((fruit: Fruit) => {
      if (!uniqueFamilies.includes(fruit.family)) {
        uniqueFamilies.push(fruit.family);
      }
    });
    return uniqueFamilies;
  }, [data]);

  const orderFruits = useMemo(() => {
    const uniqueOrders: string[] = [];
    data?.forEach((fruit: Fruit) => {
      if (!uniqueOrders.includes(fruit.order)) {
        uniqueOrders.push(fruit.order);
      }
    });
    return uniqueOrders;
  }, [data]);

  const genusFruits = useMemo(() => {
    const uniqueGenera: string[] = [];
    data?.forEach((fruit: Fruit) => {
      if (!uniqueGenera.includes(fruit.genus)) {
        uniqueGenera.push(fruit.genus);
      }
    });
    return uniqueGenera;
  }, [data]);

  const filteredDataFruits: Fruit[] | undefined = useMemo(() => {
    const hiddenFruitList: number[] = [65, 66, 95, 101, 104];
    let result: Fruit[] | undefined = data?.filter(
      (fruit: Fruit) => !hiddenFruitList.includes(fruit.id)
    );

    result = result?.filter((fruit: Fruit) =>
      fruit.name.toLowerCase().startsWith(search.toLowerCase())
    );

    if (familyFilters.length > 0) {
      result = result?.filter((fruit: Fruit) =>
        familyFilters.includes(fruit.family)
      );
    }
    if (genusFilters.length > 0) {
      result = result?.filter((fruit: Fruit) =>
        genusFilters.includes(fruit.genus)
      );
    }
    if (orderFilters.length > 0) {
      result = result?.filter((fruit: Fruit) =>
        orderFilters.includes(fruit.order)
      );
    }

    setFruitDisplayCount(result?.length);

    return result;
  }, [data, search, familyFilters, genusFilters, orderFilters]);

  return (
    <section className="yard-container">
      <ThemedText variant="bigTitle">The Yard !</ThemedText>
      <ThemedText color="grey">
        Here you can experiment with researching the characteristics of your
        favorite fruits. Have fun!
      </ThemedText>
      <SearchBar search={search} setSearch={setSearch} />
      <div className="filters-container">
        <ThemedText color="grey">Apply filters...</ThemedText>
        <div className="filter-buttons-container">
          <Button onClick={() => setSelectedFilterDropdown(familyFruits)}>
            Family
          </Button>
          <Button onClick={() => setSelectedFilterDropdown(orderFruits)}>
            Order
          </Button>
          <Button onClick={() => setSelectedFilterDropdown(genusFruits)}>
            Genus
          </Button>
          <Button onClick={() => console.log("Nutritions filter")}>
            Nutritions
          </Button>
        </div>
        <AnimatePresence>
          {selectedFilterDropdown && (
            <Dropdown
              closeDropwdown={() => setSelectedFilterDropdown(null)}
              filters={selectedFilterDropdown}
              setFilter={
                selectedFilterDropdown === familyFruits
                  ? setFamilyFilters
                  : selectedFilterDropdown === orderFruits
                  ? setOrderFilters
                  : setGenusFilters
              }
              filterType={
                selectedFilterDropdown === familyFruits
                  ? "family"
                  : selectedFilterDropdown === orderFruits
                  ? "order"
                  : "genus"
              }
              style={{
                transform: `translateX(${
                  selectedFilterDropdown === orderFruits
                    ? "130px"
                    : selectedFilterDropdown === genusFruits
                    ? "250px"
                    : "0"
                }) translateY(117px)`,
              }}
            />
          )}
        </AnimatePresence>
      </div>
      <ThemedText color="grey">
        {fruitDisplayCount != 0
          ? `Number of fruits displayed : ${fruitDisplayCount}`
          : "No fruits to display :("}
      </ThemedText>
      <div className="fruits-container">
        {loading ? (
          <Loader size="sm" speed="slow" content="Chargement de la data..." />
        ) : (
          filteredDataFruits?.map((fruit: Fruit) => (
            <Card
              key={fruit.id}
              fruit={fruit}
              OnClick={() => setSelectedFruit(fruit)}
            />
          ))
        )}
      </div>
      <AnimatePresence>
        {selectedFruit && (
          <>
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedFruit(null)}
            />
            <Modal
              fruit={selectedFruit}
              closeModal={() => setSelectedFruit(null)}
            />
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Yard;
