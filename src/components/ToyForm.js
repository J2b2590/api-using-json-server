const ToyForm = ({ handleChangeOfToy, addNewToy, toys }) => {
  return (
    <div>
      <form onSubmit={() => addNewToy()}>
        <input
          onChange={(e) => {
            handleChangeOfToy(e);
          }}
          type="text"
          value={toys.name}
          name="name"
        />
        <input
          onChange={(e) => {
            handleChangeOfToy(e);
          }}
          type="text"
          value={toys.image}
          name="image"
        />
        <button type="submit">Add toy</button>
      </form>
    </div>
  );
};

export default ToyForm;
