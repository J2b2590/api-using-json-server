const MonsterForm = ({ handleChangeOfMonster, addNewMonster, monsters }) => {
  return (
    <div>
      <form onSubmit={() => addNewMonster()}>
        <input
          onChange={(e) => {
            handleChangeOfMonster(e);
          }}
          type="text"
          value={monsters.name}
          name="name"
        />
        <input
          onChange={(e) => {
            handleChangeOfMonster(e);
          }}
          type="text"
          value={monsters.image}
          name="image"
        />
        <button type="submit">Add Monster</button>
      </form>
    </div>
  );
};

export default MonsterForm;
