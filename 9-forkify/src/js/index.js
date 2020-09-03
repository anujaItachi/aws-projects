// // import num from './test';
// // const x = 23;
// // console.log(`I imported ${num} from another module called test.js! variable x is ${x}`);

// import str from './models/Search';
// // import { add as a, multiply as m, ID } from './views/searchView';
// import * as searchView from './views/searchView';

// // console.log(`Using imported functions! ${a(ID, 2)} and ${m(3, 5)}. ${str}`);
// console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}. ${str}`);

// //Making API Calls
// import axios from 'axios';

// async function getResults(query) {
//     const proxy = 'https://cors-anywhere.herokuapp.com/'
//     try {
//         const res = await axios(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
//         const recipes = res.data.recipes;
//         console.log(recipes);
//     } catch (error) {
//         alert(error);
//     }
// }
// getResults('popcorn');

//Search model
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';
import Likes from './models/Likes';

const state = {};
//window.state = state;

const controlSearch = async () => {
    // const query = 'pizza'

    //SerachView Part-1
    const query = searchView.getInput();
    //const query = 'pizza'; //TESTING
    //console.log(query);

    if (query) {
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            await state.search.getResults();

        // console.log(state.search.result);
        clearLoader();
        searchView.renderResults(state.search.result);
        } catch(err) {
            alert('Something wrong with the search...');
            clearLoader();
        }        
    }
}

// const state = {};

// document.querySelector('.search').addEventListener('submit', e => {
//     e.preventDefault();
//     controlSearch();
// });

// const search = new Search('pizza');
// console.log(search);
//search.getResults();


//serachView Part-1
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// //TESTING
// window.addEventListener('load', e => {
//     e.preventDefault();
//     controlSearch();
// });

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    //console.log(btn);
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        //console.log(goToPage);
    }
});

// const r = new Recipe(35626);
// r.getRecipe();
// console.log(r);

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    //console.log(id);

    if (id) {
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        if(state.search) searchView.highlightSelected(id);

        state.recipe = new Recipe(id);

        // //TESTING
        // window.r = state.recipe;

        try {
            await state.recipe.getRecipe();
            //console.log(state.recipe.ingredients)
            state.recipe.parseIngredients();

            state.recipe.calcTime();
            state.recipe.calcServings();

            //console.log(state.recipe);
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
                );
        } catch (err) {
            alert('Error processing recipe!');
        }
    }
};

// window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener('load', controlRecipe));

// LIST CONTROLLER
const controlList = () => {
    if(!state.list) state.list = new List();

    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}

elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    if(e.target.matches('.shopping__delete, .shopping__delete *')) {
        state.list.deleteItem(id);

        listView.deleteItem(id);
    } else if(e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
});

// //TESTING
// state.likes = new Likes();
// likesView.toggleLikeMenu(state.likes.getNumLikes());

//Like controller
const controlLike = () => {
    if(!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    //User has NOT yet liked current recipe
    if(!state.likes.isLiked(currentID)) {
        //Add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );

        //Toggle the like button
        likesView.toggleLikeBtn(true);

        //Add like to UI list
        likesView.renderLike(newLike);
        //console.log(state.likes);

        //userHAS liked current recipe
    } else {
        //remove like from the state
        state.likes.deleteLike(currentID);

        //Toggle the like button
        likesView.toggleLikeBtn(false);

        //remove like from UI list
        likesView.deleteLike(currentID);
        //console.log(state.likes);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
};

//Restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();
    state.likes.readStorage();
    likesView.toggleLikeMenu(state.likes.getNumLikes());
    state.like.likes.forEach(like => likesView.renderLike(like));
});

elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-decrease, .btn-decrease *')){        
        if(state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if(e.target.matches('.btn-increase, .btn-increase *')){
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList();
    } else if(e.target.matches('.recipe__love, .recipe__love *')) {
        controlLike();
    }
    //console.log(state.recipe);
});

//const l =new List();
//window.l = new List();