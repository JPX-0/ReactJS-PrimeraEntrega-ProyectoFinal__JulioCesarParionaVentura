import ItemCount from "../buttons/ItemCount";

const ItemDetail = (props) => {
  return (
    <>
      {
        props.content.length !== 0 ?
        <section className="detail">
          <picture className="card__picture">
            <img src={props.content.pictureURL} alt={props.content.title} className="card__img"/>
          </picture>
          <article>
            <h2 className="card__title">{props.content.title}</h2>
            <p className="card__price">${props.content.price} x U</p>
            <p>{props.content.description}</p>
          </article>
          <ItemCount stock={props.content.stock} initial={props.content.initial} price={props.content.price} id={props.content.id}/>
        </section> :
        <p className="msg msg__cargando" id="messageDataD"></p> 
      }
    </>
  )};
  export default ItemDetail;