import { categoryArr } from "./Arrays";

export function ListHeaders() {
  return categoryArr.map(header => 
    <th key={header.id}>
      {header.category}
    </th>
  );
}