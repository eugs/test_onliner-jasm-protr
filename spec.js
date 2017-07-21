describe('homepage', function() {

  var EC = protractor.ExpectedConditions;
  var resource = 'https://www.onliner.by/';

  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.get(resource);
  });


  beforeEach(function () {
    console.log('\n...');
  });


  it('should have a proper title', function() {
    expect(browser.getTitle()).toEqual('Onliner.by');
  });

  it('should choose catalog', function() {
    var element = browser.element(by.linkText("Каталог"));
  	     element.click();

    var element = browser.element(by.linkText("Мобильные телефоны"));
    		browser.wait(EC.elementToBeClickable(element), 5000)
          .then(()=> {
            element.click();
          })
        expect(browser.getTitle()).toEqual('Мобильный телефон купить в Минске');
  });

  it('should setting up filter', function() {
    var cb = browser.element.all(by.cssContainingText('span', "Apple")).first();
    browser.driver.executeScript("arguments[0].scrollIntoView();", cb.getWebElement())
      .then(()=> {
         cb.click();
      })
      .then(()=> {
        var condition = EC.elementToBeClickable(browser.$('.schema-tags__text'));
           browser.wait(condition, 5000);
      })
  });

  it('should find and choose phone Apple iPhone 6s 16GB Silver', function() {
    // idk
    browser.sleep(2000);

    var element = browser.element(by.cssContainingText('span', 'Apple iPhone 6s 16GB Silver'));
    browser.wait(EC.presenceOf(element), 8000).then(()=> {
        browser.executeScript("arguments[0].scrollIntoView();", element);
        return element.click();
    })
    expect(browser.getTitle()).toEqual('Смартфон Apple iPhone 6s 16GB Silver купить в Минске');
  });

  it('should be added to comparison', function () {
    var element = browser.$('#product-compare-control');
    browser.wait(EC.presenceOf(element), 5000).then(()=> {
      element.click();
    });

    var panel = browser.$('.compare-button__sub.compare-button__sub_main');
      return panel.getText()
        .then((text)=> {
          console.log("panel text: ", text);
          expect(text).toEqual('1 товар в сравнении');
        });
  });

  it('should choose catalog again', function() {
    var element = browser.element(by.linkText("Каталог"));
         element.click();

    var element = browser.element(by.linkText("Мобильные телефоны"));
        browser.wait(EC.elementToBeClickable(element), 5000)
          .then(()=> {
            element.click();
          })
        expect(browser.getTitle()).toEqual('Мобильный телефон купить в Минске');
  });

  it('should setting up filter again', function() {
    var cb = browser.element.all(by.cssContainingText('span', "Apple")).first();
    browser.driver.executeScript("arguments[0].scrollIntoView();", cb.getWebElement())
      .then(()=> {
         cb.click();
      })
      .then(()=> {
        var condition = EC.elementToBeClickable(browser.$('.schema-tags__text'));
           browser.wait(condition, 5000);
      })
  });

  it('should find and choose phone Apple iPhone SE 16GB Space Gray', function() {
    // idk
    browser.sleep(2000);

    var element = browser.element(by.cssContainingText('span', 'Apple iPhone SE 16GB Space Gray'));
    browser.wait(EC.presenceOf(element), 8000).then(()=> {
        browser.executeScript("arguments[0].scrollIntoView();", element);
        return element.click();
    })
    expect(browser.getTitle()).toEqual('Смартфон Apple iPhone SE 16GB Space Gray купить в Минске');
  });

  it('should be added to comparison again', function () {
    var element = browser.$('#product-compare-control');
    browser.wait(EC.presenceOf(element), 5000).then(()=> {
      element.click();
    });

    var panel = browser.$('.compare-button__sub.compare-button__sub_main');
      return panel.getText()
        .then((text)=> {
          console.log("panel text: ", text);
          expect(text).toEqual('2 товара в сравнении');
        });
  });

  it('should check the comparison page', function () {
      var element = browser.$('.compare-button__sub.compare-button__sub_main');
      browser.wait(EC.presenceOf(element, 5000)).then(()=> {
          element.click();
        })
      expect(browser.getTitle()).toEqual('Сравнить Apple iPhone 6s 16GB Silver, Apple iPhone SE 16GB Space Gray');
    });

    it('should prove first is better', function () {
        var first_loc = 'td:nth-child(3).product-table__cell.product-table__cell_accent';
        var second_loc = 'td:nth-child(4).product-table__cell.product-table__cell_accent';
        var first = 0;
        var second = 0;

    		browser.$$(first_loc).count().then((res) => {
    			first = res;
    		})
    		.then(() => {
    			browser.$$(second_loc).count().then((res) => {
    				second = res;
    			})
    		})
    		.then(() => {
    			expect(first > second).toBeTruthy();
    		});
    	});

    it('should clear the comparisons', function () {
      var del_btn = browser.$('a[class="product-table__clear button button_small button_gray"]');
      del_btn.click()
      .then(()=> {
        return console.log("deleted");
      });

      expect(browser.getTitle()).toEqual('Каталог Onliner.by');
  });

});
