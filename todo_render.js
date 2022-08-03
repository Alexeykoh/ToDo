function renderList (list_ID) {
	const board = document.querySelector ('.board')
	const list  = document.createElement ('div')
	list.classList.add ('list')
	list.setAttribute ('id', `list_id_${ToDo[findListID_DATA(list_ID)].list_ID}`);
	list.style.backgroundColor = ToDo[findListID_DATA(list_ID)].list_COLOR
	//
	// board.appendChild (list)
	//
	board.insertBefore(list,board.firstElementChild)
	//
	const list__head = document.createElement ('div')
	list__head.classList.add ('list__head')
	list.appendChild (list__head)
	//
	const list__preName = document.createElement ('div')
	list__preName.classList.add ('list__preName')
	list__preName.innerHTML = 'ToDo: '
	list__head.appendChild (list__preName)
	//
	const list__name = document.createElement ('textarea')
	list__name.classList.add ('list__name')
	list__name.setAttribute ('id', `list_name_id_${ToDo[findListID_DATA(list_ID)].list_ID}`);
	list__name.setAttribute ('name', `list__name${ToDo[findListID_DATA(list_ID)].list_ID}`);
	// list__name.setAttribute ('cols', `5`);
	list__name.setAttribute ('rows', `1`);
	list__name.setAttribute ('maxlength', '19');
	list__name.setAttribute ('placeholder', `${ToDo[findListID_DATA(list_ID)].list_NAME}`);
	list__name.setAttribute ('onchange', `editListName(${list_ID},this)`);
	list__head.appendChild (list__name)
	//
	const color_pallet = document.createElement ('img')
	color_pallet.classList.add ('color_pallet')
	color_pallet.setAttribute ('id', `pallet_id_${ToDo[findListID_DATA(list_ID)].list_ID}`);
	color_pallet.setAttribute ('alt', "color-pallet-img");
	color_pallet.setAttribute ('src', "Todo/palette.svg");
	color_pallet.addEventListener ('click', function () {
		changeColorFromBtn(list_ID)
	})
	list__head.appendChild (color_pallet)
	//
	//
	const task__list = document.createElement ('ul')
	task__list.classList.add ('task__list')
	task__list.setAttribute ('id', `task_list_id_${ToDo[findListID_DATA(list_ID)].list_ID}`);
	list.appendChild (task__list)
	//
	const listOptions = document.createElement ('div')
	listOptions.classList.add ('list__options')
	list.appendChild (listOptions)
	//
	const addTaskBtn = document.createElement ('img')
	addTaskBtn.classList.add ('addTaskBtn')
	addTaskBtn.setAttribute ('alt', "addTaskBtn-img");
	addTaskBtn.setAttribute ('src', "Todo/add_dtn.svg");
	addTaskBtn.addEventListener ('click', function () {
		addTask(list_ID)
		renderTask (list_ID)
	})
	listOptions.appendChild (addTaskBtn)
	//
	const deleteList = document.createElement ('img')
	deleteList.classList.add ('delete__list')
	deleteList.setAttribute ('id', `delete_img_id_${ToDo[findListID_DATA(list_ID)].list_ID}`);
	deleteList.setAttribute ('alt', "delete-img");
	deleteList.setAttribute ('src', "Todo/delete.svg");
	deleteList.addEventListener ('click', function () {
		deleteListFromData(list_ID)
	})
	listOptions.appendChild (deleteList)
}

function renderTask (list_ID, placeholderImport) {
	// console.log ('renderTask',list_ID)
	// console.log (
	// 	ToDo[findListID_DATA(list_ID)].tasks_ARR
	// )
	// let placeholder = ToDo[id].tasks_ARR[ToDo[id].tasks_ARR.length-1].task_ID

	let placeholder = ToDo[findListID_DATA(list_ID)].tasks_ARR[ToDo[findListID_DATA(list_ID)].tasks_ARR.length-1].task_ID
	console.log ('placeholder default > ',placeholder)
	if (placeholderImport !== undefined){
		placeholder = placeholderImport
		console.log ('extra placeholder > ',placeholder)
	}
	console.log ('placeholder > ',placeholder)


	const listData = document.getElementById (`task_list_id_${list_ID}`)
	//
	const task = document.createElement ('li')
	task.classList.add ('task')
	task.setAttribute ('id', `task_id_${placeholder}`);
	task.style.backgroundColor = ToDo[findListID_DATA(list_ID)].list_COLOR_invert
	listData.appendChild (task)
	//
	//
	const task__wrapper = document.createElement ('div')
	task__wrapper.classList.add ('task__wrapper')
	task.appendChild (task__wrapper)
	//
	const checkEmpty = document.createElement ('img')
	checkEmpty.classList.add ('check')
	checkEmpty.setAttribute ('id', `check_id_${placeholder}`);
	checkEmpty.setAttribute ('alt', "check-img");
	checkEmpty.setAttribute ('src', "Todo/check.svg");
	task__wrapper.appendChild (checkEmpty)
	checkEmpty.addEventListener ('click', function () {
		taskCheck (list_ID,placeholder)
	})
	//
	const checkDone = document.createElement ('img')
	checkDone.classList.add ('check')
	checkDone.classList.add ('done')
	checkDone.setAttribute ('id', `check_id_done${placeholder}`);
	checkDone.setAttribute ('alt', "check-img");
	checkDone.setAttribute ('src', "Todo/check_done.svg");
	task__wrapper.appendChild (checkDone)
	checkDone.addEventListener ('click', function () {
		taskCheck (list_ID,placeholder)
	})
	//
	const labelCheckbox = document.createElement ("label");
	labelCheckbox.classList.add (`labelCheckbox`);
	labelCheckbox.setAttribute ('id', `label-checkbox${ToDo[findListID_DATA(list_ID)].list_ID}`);
	labelCheckbox.setAttribute ('for', `checkbox${ToDo[findListID_DATA(list_ID)].list_ID}`);
	task__wrapper.appendChild (labelCheckbox);
	const task__checkbox = document.createElement ('input')
	task__checkbox.classList.add ('task__checkbox')
	task__checkbox.setAttribute ('id', `checkbox${ToDo[findListID_DATA(list_ID)].list_ID}`);
	task__checkbox.setAttribute ('type', `checkbox`);
	task__wrapper.appendChild (task__checkbox)
	//
	const task__deadline = document.createElement ('input')
	task__deadline.classList.add ('task__deadline')
	task__deadline.setAttribute ('id', `task__deadline_${placeholder}`);
	task__deadline.setAttribute ('type', `date`);
	task__deadline.setAttribute ('name', `deadline`);
	task__deadline.value = ToDo[findListID_DATA (list_ID)].tasks_ARR[findTaskID_DATA (list_ID, placeholder)].task_DEADLINE
	//
	console.log ('placeholder for deadline',placeholder)
	task__deadline.setAttribute ('onchange', `editDate(${list_ID},'${placeholder}',this)`);
	task__wrapper.appendChild (task__deadline)
	//
	const task__content = document.createElement ('textarea')
	task__content.classList.add ('task__content')
	task__content.setAttribute ('id', `textarea${placeholder}`);
	task__content.setAttribute ('name', `task__content`);
	task__content.setAttribute ('cols', `5`);
	task__content.setAttribute ('rows', `2`);
	task__content.setAttribute ('maxlength', `30`);
	task__content.value = ToDo[findListID_DATA (list_ID)].tasks_ARR[findTaskID_DATA (list_ID, placeholder)].task_CONTAINER
	task__content.setAttribute ('placeholder', `Task #${placeholder.slice(-1)}`);
	task__content.setAttribute ('onchange', `editTask(${list_ID},'${placeholder}',this)`);
	task.appendChild (task__content)
	//
	if(!ToDo[findListID_DATA (list_ID)].tasks_ARR[findTaskID_DATA (list_ID, placeholder)].task_COMPLETE){
		checkEmpty.classList.add('active')
	} else {
		checkDone.classList.add('active')
	}
	//
	const taskToTrash = document.createElement ('img')
	taskToTrash.classList.add ('task__trash')
	taskToTrash.setAttribute ('id', `task_trash_id_${placeholder}`);
	taskToTrash.setAttribute ('alt', "task-trash-img");
	taskToTrash.setAttribute ('src', "Todo/taskDelete.svg");
	task.appendChild (taskToTrash)
	taskToTrash.addEventListener ('click', function () {
		deleteTask (list_ID,placeholder)
	})
	//
}

function hexToRgb(hex) {
	let bigint = parseInt(hex, 16);
	let r = (bigint >> 16) & 255;
	let g = (bigint >> 8) & 255;
	let b = bigint & 255;

	return r + "," + g + "," + b;
}

// console.log (random_rgba(0,0.6))
function random_rgba (list,alfa) {
	const colorList = [
		['FFC75F','FF9671','FF6F91','D65DB1','845EC2']
	]
	let RC = 'rgba('+hexToRgb(colorList[list][getRandomNum(colorList[list].length)])+','+alfa+')'
	while (ToDo_props.lastColor === RC){
		RC = 'rgba('+hexToRgb(colorList[list][getRandomNum(colorList[list].length)])+','+alfa+')'
	}
	return RC;
}

function findListID_DATA (list_ID){
	return ToDo.findIndex(function (key){
		 return  key.list_ID === list_ID
	})
}
function findTaskID_DATA (list_ID,task_ID){
	return ToDo[findListID_DATA(list_ID)].tasks_ARR.findIndex(function (key){
		return  key.task_ID === task_ID
	})
}

function getRandomNum (max){
	return Math.floor(Math.random() * max)
}
