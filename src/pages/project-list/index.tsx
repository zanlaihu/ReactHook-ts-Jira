import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject } from "utils";
import { useMount } from "utils";
import { useDebounce } from "utils";
import { useHttp } from "utils/http";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setLists] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 500);
  const client = useHttp();

  // Update lists
  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then(setLists);
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setLists(await response.json());
    //   }
    // });
  }, [debounceParam]);

  // Update users
  useEffect(() => {
    client("users").then(setUsers);
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  }, []);

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
