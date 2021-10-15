import {InputService} from "./input.service";
import {GameServiceMock} from "../testing/mock/game.service.mock";
import {ContextServiceMock} from "../testing/mock/context.service.mock";
import {TestBed} from "@angular/core/testing";
import {GameService} from "./game.service";
import {ContextService} from "./context.service";
import {ViewServiceMock} from "../testing/mock/view.service.mock";
import {ViewService} from "./view.service";
import {ViewRenderLetterParameterInterface} from "../interfaces/view.render-letter.parameter.interface";

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

        service = new InputService(gameServiceMock, contextServiceMock, viewServiceMock);
    });

    it('keyDown handler should call renderLetter with right parameter ', () => {
        // arrange
        const contextSpy = jest.spyOn(contextServiceMock, "text", "get");
        const viewServiceSpy = jest.spyOn(viewServiceMock, "renderLetter")

        contextSpy.mockReturnValue("This is a test text to test");

        let event = new KeyboardEvent("keypress", {"key": "T"});

        const expectedParameter: ViewRenderLetterParameterInterface = {
            correct: true,
            allowNextWordToGetTyped: true,
            isWhitespace: false
        }

        // act
        const result = service['keyDownHandler'](event)

        // assert
        expect(viewServiceSpy).toHaveBeenCalledWith(expectedParameter)
    })
})
