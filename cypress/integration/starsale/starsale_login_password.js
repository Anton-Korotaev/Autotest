describe('Проверка формы логина и пароля', function () {
	it('Позитивная проверка: верный логин, верный пароль', function () {
		cy.visit('https://starsale.ru/');
		cy.get('.g-header__login'). click();
		cy.contains('Пожалуйста, авторизуйтесь');
		cy.get(':nth-child(4) > .bx-authform-input-container > input'). type('kowabek339');
		cy.get(':nth-child(5) > .bx-authform-input-container > input'). type('AG5-6RA-Q9m-mmb');
		cy.get('.btn'). click();
		cy.contains('Текущие заказы');
	})
		it('Негативная проверка: неверный логин, верный пароль', function () {
		cy.visit('https://starsale.ru/');
		cy.get('.g-header__login'). click();
		cy.contains('Пожалуйста, авторизуйтесь');
		cy.get(':nth-child(4) > .bx-authform-input-container > input'). type('kowabek33');
		cy.get(':nth-child(5) > .bx-authform-input-container > input'). type('AG5-6RA-Q9m-mmb');
		cy.get('.btn'). click();
		cy.contains('Неверный логин или пароль');
	})
		it('Негативная проверка: верный логин, неверный пароль', function () {
		cy.visit('https://starsale.ru/');
		cy.get('.g-header__login'). click();
		cy.contains('Пожалуйста, авторизуйтесь');
		cy.get(':nth-child(4) > .bx-authform-input-container > input'). type('kowabek339');
		cy.get(':nth-child(5) > .bx-authform-input-container > input'). type('AG5-6RA-Q9m-mm');
		cy.get('.btn'). click();
		cy.contains('Неверный логин или пароль');
	})
		it('Негативная проверка: пустой логин, пустой пароль', function () {
		cy.visit('https://starsale.ru/');
		cy.get('.g-header__login'). click();
		cy.contains('Пожалуйста, авторизуйтесь');
		cy.get('.btn'). click();
		cy.contains('Неверный логин или пароль');
	})
})