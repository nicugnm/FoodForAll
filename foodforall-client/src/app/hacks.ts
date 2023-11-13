import { initTE } from 'tw-elements';
import { Subject, concatMap, delay, of } from "rxjs";

let tailwindelementsQueue = new Subject<any>();

tailwindelementsQueue.pipe(
    concatMap(item => of(item).pipe(delay(100)))
).subscribe((x) => {
    x();
})


export function TailwindElements() {
    return function (target: any) {
        const originalOnInit = target.prototype.ngOnInit;
        target.prototype.ngOnInit = function () {
            if (originalOnInit) {
                originalOnInit.apply(this);
            }
            InittailwindelementsFix();
        };
    };
}


export function InittailwindelementsFix () {
    tailwindelementsQueue.next(() => {
        const elements = document.querySelectorAll('*');
        const tailwindelementsElements: any[] = [];
        const initializedElements = Array.from(document.querySelectorAll('[tailwindelements-initialized]'));

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const attributes = element.attributes;

            for (let j = 0; j < attributes.length; j++) {
                const attribute = attributes[j];

                if (attribute.name.startsWith('data-')) {
                    // add to the tailwindelementsElements array if it doesn't exist
                    if (!tailwindelementsElements.includes(element) && !initializedElements.find(x => x.isEqualNode(element))) {
                        tailwindelementsElements.push(element);
                    }
                }
            }
        }

        // add an attribute to the element to indicate that it has been initialized
        for (let i = 0; i < tailwindelementsElements.length; i++) {
            const element = tailwindelementsElements[i];
            element.setAttribute('tailwindelements-initialized', '');
        }
        initTE();

        tailwindelementsElements.forEach(element => {
            const attributes: { name: string; value: string }[] = Array.from(element.attributes);
            const dataAttributes = attributes.filter(attribute => attribute.name.startsWith('data-'));

            dataAttributes.forEach(attribute => {
                element.setAttribute(attribute.name.replace('data-', 'te-'), attribute.value);
                element.removeAttribute(attribute.name);
            });

        });
    });
}
