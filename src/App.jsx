import { useState } from 'react';
import { Input, Space, Button, Message } from '@arco-design/web-react';
import { IconDelete, IconPlus } from '@arco-design/web-react/icon';
const InputSearch = Input.Search;

function App() {
	const [inputValue, setinputValue] = useState('');
	const [todoList, setTodoList] = useState([]);
	const [index, setIndex] = useState(0);

	function handleAdd() {
		if (!inputValue) return Message.warning('事项不能为空哦！');
		setTodoList([...todoList, inputValue]);
		setinputValue('');
	}

	const handleDel = (item) => {
		setTodoList(todoList.filter((e) => e != item));
	};
	return (
		<>
			<div className="full-v bg-#fcffe6 flex-center">
				<main className="todo-main">
					<header>
						<p className="flex-x-center text-6 mt--10px font-bold">
							<span className="block w-4em cursor-pointer transform transition transition-200 hover:scale-125 ">
								TODO
							</span>
						</p>
						<InputSearch
							value={inputValue}
							onChange={(value) => setinputValue(value)}
							onSearch={handleAdd}
							size="large"
							allowClear
							placeholder="请输入待办"
							searchButton={<IconPlus />}
							style={{ width: 350 }}
						/>
					</header>
					<article className="mt-5">
						<TodoItems
							list={todoList}
							onDelete={handleDel}
						></TodoItems>
					</article>
				</main>
			</div>
		</>
	);
}

function TodoItems({ list, onDelete }) {
	const colors = [
		['#919eff', '#91fff2'],
		['#e7eb94', '#c394eb'],
		['#578deb', '#94eb98'],
	];

	const todoList = list.map((e, i) => {
		const [c1, c2] = colors[i % 3];
		return (
			<li
				className="todo-item flex-x-between"
				style={{ color: c1, background: c2, boxShadow: `3px 3px 3px 4px rgba(0,0,0,0.3)` }}
				key={i}
			>
				<span>{e}</span>
				<span
					onClick={() => onDelete(e)}
					className="cursor-pointer  "
				>
					<IconDelete />
				</span>
			</li>
		);
	});
	return <>{todoList}</>;
}

export default App;
