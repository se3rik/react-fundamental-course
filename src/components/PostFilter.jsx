import React from "react";

import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

export default function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholder="Поиск по заголовку"
        value={filter.searchQuery}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />

      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { name: "По названию", value: "title" },
          { name: "По описанию", value: "body" },
        ]}
      />
    </div>
  );
}
