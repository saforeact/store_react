import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeAllItemFromBasketAction } from "../../redux/actions/basketActions";
import { shopPage } from "../../utils/constants";

export default function SuccessPay() {
  const disptach = useDispatch();
  const history = useHistory();
  useEffect(() => {
    disptach(removeAllItemFromBasketAction());
    history.push(shopPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
