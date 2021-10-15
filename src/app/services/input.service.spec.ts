import {InputService} from "./input.service";
import {GameServiceMock} from "../testing/mock/game.service.mock";
import {ContextServiceMock} from "../testing/mock/context.service.mock";
import {TestBed} from "@angular/core/testing";
import {GameService} from "./game.service";
import {ContextService} from "./context.service";

describe('inputService', () => {
    let gameServiceMock: GameService;
    let contextServiceMock: ContextService;
    let service: InputService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: GameService, useClass: GameServiceMock },
                { provide: ContextService, useClass: ContextServiceMock }
            ]
        });

        gameServiceMock = TestBed.inject<any>(GameService);
        contextServiceMock = TestBed.inject<any>(ContextService);

        service = new InputService(gameServiceMock, contextServiceMock);
    });

    it('inputservice.check should return false if f:k', () => {
        // TODO write usful test cases

        // arrange
        let event = new KeyboardEvent("keypress", {"key": "a"});
        const userInput = "f";
        const expectedInput = "k";

        // assert
        // const result = InputService.check(userInput, expectedInput)

        // act
        // expect(result).toBeFalse()
    })
})
