'use client'
import { useSelector } from "react-redux";
import { selectOffers } from "@/store/reducers/gardenerReducer";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import * as styles from "./styles.module.css"

export default function MyRequests() {
  const offers = useSelector(selectOffers)
  console.log(offers);
  const rows = offers.map((offer) => {
    let status;
    if(offer.statusOfertaActiva){
      status = "Confirmar"
    }else{
      status = "Pendiente"
    }
    return {
      id: offer.id,
      titulo: offer.nombre,
      status
    }
  })
  const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "titulo",
      label: "TITULO",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];
  return (

    <main className="flex min-h-screen flex-col items-center p-24 w-4/5 bg-[#edfbf2]">
      <h2>Postulaciones</h2>
      <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    </main>

  );
}