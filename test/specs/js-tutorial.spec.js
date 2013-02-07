describe('js-tutorial', function () {
    describe('hello world', function () {
        it('should alert "hello world"', function () {
            spyOn(window, 'alert');

            tutorial.helloWorld();

            expect(window.alert).toHaveBeenCalledWith('hello world');
        });
    })
});

describe('green threading homework assignment', function () {
    describe('nonBlockingSort', function () {
        it('should call the callback with the sorted array', function () {
            var callback = jasmine.createSpy();
            var input = [2, 1, 3];
            var compareFunction; // default compare

            nonBlockingSort(input, compareFunction, callback);
            waitsFor(function () {
                if (callback.callCount > 0) {
                    expect(callback).toHaveBeenCalledWith([1, 2, 3]);
                    return true;
                }
            }, 'callback to be called', 10);
        });

        function slowCompare(a, b) {
            var startTime = Date.now();
            // wait for 5 millisec
            while (Date.now() - startTime < 5);

            if (a === b) {
                return 0;
            }
            return a < b ? -1 : 1;
        }

        it('should not hog the cpu', function () {
            var callback = jasmine.createSpy();
            var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            var ticksCounter = 0;
            var intervalId = setInterval(function () {
                ticksCounter++;
            }, 10);

            nonBlockingSort(input, slowCompare, callback);
            waitsFor(function () {
                if (callback.callCount > 0) {
                    expect(ticksCounter).toBeGreaterThan(3);
                    clearInterval(intervalId);
                    return true;
                }
            }, 'callback to be called', 75);
        });
    });
});