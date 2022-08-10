import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showNotification } from "@mantine/notifications";
import { useEffect, useRef } from "react";


export function useValueNotification(value:number) {
const mounted = useRef(false);
useEffect(() => {
  if(!mounted.current) {
    mounted.current = true
    return
  }
  showNotification({
    title: "Succesfully Added To Cart!",
    message: `Cart Total is $${value}`,
    color: "lime",
    sx: {'@media (max-width: 880px)': {display: "none"}},
    icon: <FontAwesomeIcon icon={faCheck}/>,
  })
},[value])

}
