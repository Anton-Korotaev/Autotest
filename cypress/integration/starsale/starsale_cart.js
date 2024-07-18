describe('Проверка пути до оформления заказа', function () {
	it('Позитивная проверка: путь до оформления заказа', function () {
		cy.visit('https://starsale.ru/');
		cy.get(':nth-child(2) > .c-categories-index__link > .c-categories-index__title'). click();
		cy.get('#bx_3966226736_78837_c80764dfaf26ca80162484593ec7c29b > .c-product-card > .c-product-card__info > .c-product-card__title'). click();
		cy.get('.c-product-actions__price > .e-btn'). click();
		cy.wait(500);
		cy.get('.c-product-actions__price > .e-btn'). click();
		cy.contains('Моя корзина');
		cy.get('.btn'). click();
		cy.contains('Оформление заказа');
		cy.contains('Оформить заказ');
	})
})