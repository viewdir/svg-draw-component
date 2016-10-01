// base-component v1.0.1 https://github.com/viewdir/base-component#readme
interface Window {
    _Components: any;
}

declare var TinyEmitter: any;
declare namespace _Components {
    class BaseComponent implements IBaseComponent {
        options: IBaseComponentOptions;
        protected _$element: JQuery;
        constructor(options: IBaseComponentOptions);
        protected _init(): boolean;
        protected _getDefaultOptions(): IBaseComponentOptions;
        protected _emit(event: string, ...args: any[]): void;
        protected _resize(): void;
        databind(data: any): void;
    }
    function applyMixins(derivedCtor: any, baseCtors: any[]): void;
}

declare namespace _Components {
    interface IBaseComponent {
        options: IBaseComponentOptions;
        databind(data: any): void;
    }
}

declare namespace _Components {
    interface IBaseComponentOptions {
        element?: string;
    }
}

// custom definitions go in here
declare namespace IIIFComponents {
    interface ISubject {
        _$wrapper: JQuery;
        addBackground(svgDrawPaper: any): void;
        getSubjectType(): SubjectType;
        freeze(): void;
    }
}

declare namespace IIIFComponents {
    interface ISubjectOptions {
        target?: any;
    }
}

declare namespace IIIFComponents {
    interface ISvgDrawComponent extends _Components.IBaseComponent {
    }
}

declare namespace IIIFComponents {
    interface ISvgDrawComponentOptions extends _Components.IBaseComponentOptions {
        subjectType?: SubjectType;
        subject?: any;
    }
}

declare var paper: any;
declare namespace IIIFComponents {
    class ImageSubject implements ISubject {
        raster: any;
        _$wrapper: JQuery;
        private imgID;
        constructor(target: any);
        freeze(): void;
        addBackground(svgDrawPaper: any): void;
        getSubjectType(): SubjectType;
    }
}

declare var OpenSeadragon: any;
declare var paper: any;
declare namespace IIIFComponents {
    class OSDSubject implements ISubject {
        viewer: any;
        _$wrapper: JQuery;
        constructor(target: any);
        freeze(): void;
        addBackground(svgDrawPaper: any): void;
        getSubjectType(): SubjectType;
        private addOverlay();
        private addTools();
    }
}

declare namespace IIIFComponents {
    class StringValue {
        value: string;
        constructor(value?: string);
        toString(): string;
    }
}

declare namespace IIIFComponents {
    class Subject implements ISubject {
        _$wrapper: JQuery;
        constructor(target: any);
        addBackground(svgDrawPaper: any): void;
        freeze(): void;
        getSubjectType(): SubjectType;
    }
}

declare namespace IIIFComponents {
    class SubjectType extends StringValue {
        static DEFAULT: SubjectType;
        static IMAGE: SubjectType;
        static OPENSEADRAGON: SubjectType;
        default(): SubjectType;
        image(): SubjectType;
        openseadragon(): SubjectType;
    }
}

declare var paper: any;
declare namespace IIIFComponents {
    class SvgDrawComponent extends _Components.BaseComponent implements ISvgDrawComponent {
        options: ISvgDrawComponentOptions;
        subject: ISubject;
        private _$canvas;
        private _$wrapper;
        private _$toolbarDiv;
        private _$toolbar;
        svgDrawPaper: any;
        private _hitOptions;
        constructor(options: ISvgDrawComponentOptions);
        protected _init(): boolean;
        debug(): void;
        pathComplete(msg: any): void;
        addToolbar(): void;
        paperSetup(el: any): void;
        protected _getDefaultOptions(): ISvgDrawComponentOptions;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.SvgDrawComponent {
    class Events {
        static DEBUG: string;
        static SHAPECOMPLETE: string;
    }
}
