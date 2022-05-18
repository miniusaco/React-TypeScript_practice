type TodoType = {
  userId: number;
  title: string;
  completed?: boolean; //?を付ける事で必須でないことを明示できる
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
