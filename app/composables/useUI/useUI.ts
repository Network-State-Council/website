import { reactive, computed, onMounted } from 'vue';
import { ColorMode, FontSize } from './useUI.model';


interface UIState {
	colorMode: ColorMode;
	fontSize: FontSize;
	contrastMode: boolean;
	isLoading: boolean;
	loaded: boolean;
	isMobile: boolean;
	scrollDirection?: 'up' | 'down';
	isOnTop?: boolean;
	[key: string]: any;
}
const uiState = reactive<UIState>({
	colorMode: ColorMode.LIGHT,
	fontSize: FontSize.MEDIUM,
	contrastMode: false,
	isMobile: false,
	isLoading: false,
	loaded: false,
	scrollDirection: 'down',
	isOnTop: true,
});

if (import.meta.client) {
	window.addEventListener('resize', () => {
		uiState.isMobile = window.innerWidth < 768;
	});
	uiState.isMobile = window.innerWidth < 768;
}

export const useUI = () => {
	onMounted(() => {
		let colorMode;
		let fontSize;
		if (import.meta.client) {
			colorMode = localStorage.getItem('colorMode');
			fontSize = localStorage.getItem('fontSize');
		}
		if (colorMode) {
			uiState.colorMode = colorMode as ColorMode;
		}
		if (fontSize) {
			uiState.fontSize = fontSize as FontSize;
		}
		else {
			uiState.fontSize = FontSize.MEDIUM;
		}
	});
	return {
		loaded: uiState.loaded,
		toggleContrastMode() {
			uiState.contrastMode = !uiState.contrastMode;
		},
		contrastMode: computed({
			set(mode: boolean) {
				uiState.contrastMode = mode;
			},
			get() {
				return uiState.contrastMode;
			},
		}),
		toggleColorMode() {
			uiState.colorMode = uiState.colorMode === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT;
		},
		setUI(data: { [key: string]: any }) {
			const keys = Object.keys(data);
			keys.forEach((key) => {
				if (uiState?.[key] !== undefined) {
					uiState[key] = data[key];
				}
			});
		},
		colorMode: computed({
			set(mode: ColorMode) {
				uiState.colorMode = mode;
			},
			get() {
				return uiState.colorMode;
			},
		}),
		fontSize: computed({
			set(size: FontSize) {
				uiState.fontSize = size;
			},
			get() {
				return uiState.fontSize;
			},
		}),
		isMobile: computed(() => uiState.isMobile),
		isLoading: computed({
			set(loading: UIState['isLoading']) {
				uiState.isLoading = loading;
			},
			get() {
				return uiState.isLoading;
			},
		}),


		isOnTop: computed({
			set(isOnTop: UIState['isOnTop']) {
				uiState.isOnTop = isOnTop;
			},
			get() {
				return uiState.isOnTop;
			},
		}),

		scrollDirection: computed({
			set(direction: UIState['scrollDirection']) {
				uiState.scrollDirection = direction;
			},
			get() {
				return uiState.scrollDirection;
			},
		}),
	};
};
