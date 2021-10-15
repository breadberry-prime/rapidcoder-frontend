import {InputService} from "./input.service";
import {GameServiceMock} from "../testing/mock/game.service.mock";
import {ContextServiceMock} from "../testing/mock/context.service.mock";
import {TestBed} from "@angular/core/testing";
import {GameService} from "./game.service";
import {ContextService} from "./context.service";
import {ViewServiceMock} from "../testing/mock/view.service.mock";
import {ViewService} from "./view.service";

describe('inputService', () => {
    let gameServiceMock: GameService;
    let contextServiceMock: ContextService;
    let viewServiceMock: ViewService

    let service: InputService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: GameService, useClass: GameServiceMock },
                { provide: ContextService, useClass: ContextServiceMock },
                { provide: ViewService, useClass: ViewServiceMock}
            ]
        });

        gameServiceMock = TestBed.inject<any>(GameService);
        contextServiceMock = TestBed.inject<any>(ContextService);
        viewServiceMock = TestBed.inject<any>(ViewService)

        service = new InputService(gameServiceMock, contextServiceMock);
    });

    it('inputservice.check should return false if f:k', () => {
        // TODO write usful test cases

        // arrange
        let event = new KeyboardEvent("keypress", {"key": "a"});

        // act
        const result = service['keyDownHandler'](event)

        // assert
        // expect(result).toBeFalse()
    })
})
